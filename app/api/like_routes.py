from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Like, db
from ..forms.like_form import LikeForm

like_routes = Blueprint('likes', __name__)

@like_routes.route('/')
def get_likes():
  likes = Like.query.all()

  return {'likes': [like.to_dict() for like in likes]}

@like_routes.route('/create_like', methods=['POST'])
@login_required
def create_like():
  form = LikeForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    like = Like(
      user_id=form.data['user_id'],
      event_id=form.data['event_id']
    )

    db.session.add(like)
    db.session.commit()
    return jsonify(like.to_dict()), 200

@like_routes.route('/<int:like_id>', methods=['DELETE'])
@login_required
def delete_like(like_id):
  likeData = Like.query.get(like_id)
  db.session.delete(likeData)
  db.session.commit()
  return jsonify(likeData.to_dict()), 200
