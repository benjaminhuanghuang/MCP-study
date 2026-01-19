import os
from openai import OpenAI
from IPython.display import Markdown, display

openai_api_key = os.getenv('OPENAI_API_KEY')

if openai_api_key:
    print(f"OpenAI API Key exists and begins {openai_api_key[:8]}")
else:
    print("OpenAI API Key not set - please head to the troubleshooting guide in the setup folder")


openai = OpenAI()

# conversation history sent to the model.
messages = [{"role": "user", "content": "What is 2+2?"}]

response = openai.chat.completions.create(
    model="gpt-4.1-nano",
    messages=messages
)

print(response.choices[0].message.content)

# 
question = "Please propose a hard, challenging question to assess someone's IQ. Respond only with the question."
messages = [{"role": "user", "content": question}]
response = openai.chat.completions.create(
    model="gpt-4.1-mini",
    messages=messages
)

question = response.choices[0].message.content

print(question)
# form a new messages list
messages = [{"role": "user", "content": question}]

# Ask it again
response = openai.chat.completions.create(
    model="gpt-4.1-mini",
    messages=messages
)

answer = response.choices[0].message.content
print(answer)


display(Markdown(answer))