import openai
import os
from dotenv import load_dotenv

# Load the API key from the .env file
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# Initialize the OpenAI API with your API key
openai.api_key = api_key
# Prompt the user for a file path
file_path = input("Please enter the file path: ")

# Read the visible text content of the file
with open(file_path, "r") as file:
    content = file.read()

# Initialize the OpenAI API with your API key
openai.api_key = "YOUR_API_KEY_HERE"

# Generate an expert explanation using the ChatGPT model
response = openai.Completion.create(
    engine="davinci",
    prompt=content,
    temperature=0.5,
    max_tokens=1024,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)

# Extract the expert explanation from the OpenAI response
explanation = response.choices[0].text.strip()

# Save the expert explanation in a Markdown file
file_name, _ = os.path.splitext(file_path)
with open(file_name + ".md", "w") as file:
    file.write("# Expert Explanation\n\n")
    file.write(explanation)