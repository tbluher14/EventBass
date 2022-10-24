from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError


class CreateCommentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('event_id', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])
    submit = SubmitField('Submit')
