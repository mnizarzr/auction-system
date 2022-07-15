FROM pkosiec/mongo-seeding:latest

WORKDIR /data-import/

# Copy your project (import data and all dependencies have to be there)
COPY ./sample-data /data-import/

# Install external dependencies
RUN npm install

# Set environmental variables

ENV DB_NAME auct
ENV DB_PORT 27017
ENV DROP_COLLECTION true
ENV DB_USERNAME admin
ENV DB_PASSWORD admin
ENV REPLACE_ID true

# Set default workdir to simplify running the image
WORKDIR /data-import/data