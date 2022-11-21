from .db import db

class Like(db.Model):
  __tablename__ = 'likes'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  event_id = db.Column(db.Integer, db.ForeignKey("events.id"), nullable=False)

  event = db.relationship("Event", back_populates="likes")

  def to_dict(self):
    return {
      "id" : self.id,
      "user_id" : self.user_id,
      "event_id" : self.event_id,
    }
