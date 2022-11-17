from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Event, db
from datetime import time, datetime
import time
from ..forms.event_form import CreateEventForm



event_routes = Blueprint('events', __name__)

@event_routes.route('/', methods=['GET'])
def get_all_events():
    events = Event.query.all()
    return {"events": [event.to_dict() for event in events]}


@event_routes.route('/create_event', methods=['POST'])
@login_required
def create_event():
    form = CreateEventForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        eventData = Event(
            owner_id=current_user.id,
            name=form.data['name'],
            description=form.data['description'],
            venue_name=form.data['venue_name'],
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            zip_code=form.data['zip_code'],
            image_url=form.data['image_url'],
            website=form.data['website'],
            start_date=form.data['start_date'],
            start_time=form.data['start_time'],
            end_date=form.data['end_date'],
            end_time= form.data['end_time'],
            refunds=form.data['refund_policy']
        )
        
        db.session.add(eventData)
        db.session.commit()
        return jsonify(eventData.to_dict()), 200
    else:
        return {'errors': form.errors}, 401


@event_routes.route('/<int:event_id>', methods=['PUT'])
@login_required
def update_event(event_id):
    form = CreateEventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        event = Event.query.get(event_id)

        event.owner_id=current_user.id
        event.name=form.data['name']
        event.description=form.data['description']
        event.venue_name=form.data['venue_name']
        event.address=form.data['address']
        event.city=form.data['city']
        event.state=form.data['state']
        event.zip_code=form.data['zip_code']
        event.image_url=form.data['image_url']
        event.website=form.data['website']
        event.start_date=form.data['start_date']
        event.start_time=form.data['start_time']
        event.end_date=form.data['end_date']
        event.end_time=form.data['end_time']
        event.refunds=form.data['refund_policy']

        db.session.commit()
        return jsonify(event.to_dict()), 200
    else:
        return {'errors': form.errors}, 401


@event_routes.route('/<int:event_id>', methods=['DELETE'])
@login_required
def delete_event(event_id):
    event = Event.query.get(event_id)
    db.session.delete(event)
    db.session.commit()
    return {'message': 'Event deleted successfully'}
