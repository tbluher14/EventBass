from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class LikeForm(FlaskForm):
  user_id = IntegerField('user_id', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  event_id = IntegerField('event_id', validators=[DataRequired(), NumberRange(min=1, max=1000)])
  submit = SubmitField('Submit')
