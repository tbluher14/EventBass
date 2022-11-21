from flask.cli import AppGroup
from app.seeds.comments import seed_comments, undo_comments

from app.seeds.events import seed_events, undo_events
from .users import seed_users, undo_users
from .likes import seed_likes, undo_likes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_events()
    seed_comments()
    seed_likes()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_events()
    undo_comments()
    undo_likes()
    # Add otherundo functions here
