from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TimeField, SubmitField, DateField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import Event


# def valid_end_check (form, field):
#     if field.data < form.data['start_time']:
#         raise ValidationError('End time must be after start time.')

# def valid_start_check (form, field):
#     if field.data > form.data['end_time']:
#         raise ValidationError('Start time must be before end time.')


class CreateEventForm(FlaskForm):
    owner_id = IntegerField('owner_id', validators=[DataRequired()])
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    zip_code = StringField('Zip Code', validators=[DataRequired()])
    image_url = StringField('Image URL', validators=[DataRequired()])
    website = StringField('Website', validators=[DataRequired()])
    start_date = StringField('Start Date', validators=[DataRequired()])
    start_time = TimeField('Start Time', validators=[DataRequired()])
    end_date = StringField('End Date', validators=[DataRequired()])
    end_time = TimeField('End Time', validators=[DataRequired()])
    refund_policy = StringField('Refund Policy', validators=[DataRequired()])
    submit = SubmitField('Submit')
