from .db import db
from sqlalchemy import func
from datetime import time

class Event (db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zip_code = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    website = db.Column(db.String, nullable=False)
    start_date = db.Column(db.String, nullable=False)
    start_time = db.Column(db.Time, nullable=False)
    end_date = db.Column(db.String, nullable=False)
    end_time = db.Column(db.Time, nullable=False)
    refunds = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    created_at = db.Column("created_at", db.DateTime, default=func.now())
    updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

    organizer = db.relationship('User', back_populates='event_owner')
    comments = db.relationship('Comment', back_populates='event_comments', cascade='all, delete')

    def to_dict(self):

        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zip_code': self.zip_code,
            'image_url': self.image_url,
            'website': self.website,
            'start_date': self.start_date,
            'start_time': self.start_time.isoformat(timespec='minutes'),
            # 'start_time': self.start_time,
            'end_date': self.end_date,
            # 'end_time': self.end_time,
            'end_time': self.end_time.isoformat(timespec='minutes'),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'refunds': self.refunds,
            'owner_id': self.owner_id
        }
