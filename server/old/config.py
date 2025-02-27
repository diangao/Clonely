import os

class Config:
    GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
    CHATGPT_API_KEY = os.getenv('CHATGPT_API_KEY')
    PLAY_HT_API_KEY = os.getenv('PLAY_HT_API_KEY')
    PLAY_HT_USER_ID = os.getenv('PLAY_HT_USER_ID')
