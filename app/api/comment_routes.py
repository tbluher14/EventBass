from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment, db
from ..forms.comment_form import CreateCommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['GET'])
def get_all_comments():
    comments = Comment.query.all()
    return {"comments": [comment.to_dict() for comment in comments]}

@comment_routes.route('/create_comment', methods=['POST'])
@login_required
def create_comment():
    form = CreateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("this is form", form)
    if form.validate_on_submit():
        commentData = Comment(
            user_id=form.data['user_id'],
            event_id=form.data['event_id'],
            comment=form.data['comment']
        )
        print("this is comment data", commentData)
        db.session.add(commentData)
        db.session.commit()
        return jsonify(commentData.to_dict()), 200
    else:
        print("this is form errors", form)
        return {'errors': form.errors}, 401


@comment_routes.route('/<int:comment_id>', methods=['PUT'])
@login_required
def update_comment(comment_id):
    form = CreateCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        commentData = Comment.query.get(comment_id)
        commentData.comment = form.data['comment']
        db.session.commit()
        return jsonify(commentData.to_dict()), 200
    else:
        return {'errors': form.errors}, 401


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    commentData = Comment.query.get(id)
    db.session.delete(commentData)
    db.session.commit()
    return {'message': 'Comment deleted successfully'}, 200
