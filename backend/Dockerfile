# Use the official Python image
FROM python:3.10

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Upgrade pip (optional, but recommended)
RUN pip install --upgrade pip

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the Django code into the container
COPY . .

# Expose the port Django will run on
EXPOSE 8000

# Run Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
