FROM python:3.10

RUN pip install --no-cache-dir uvicorn[standard]==0.15.0 gunicorn==20.1.0 fastapi==0.68.1

# Install Poetry
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | POETRY_HOME=/opt/poetry python && \
    cd /usr/local/bin && \
    ln -s /opt/poetry/bin/poetry && \
    poetry config virtualenvs.create false

# Copy using poetry.lock* in case it doesn't exist yet
COPY ./pyproject.toml ./poetry.lock* /app/

WORKDIR /app/
RUN poetry install --no-root

COPY ./app /app

ENV PYTHONPATH=/app

EXPOSE 80

CMD uvicorn --reload --host 0.0.0.0 --port 80 app.main:app