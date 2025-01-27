import dataPipeline from './screenshots/data-pipeline-sys-arch.png'
import favoriteMovies from './screenshots/favoritesExample.png'
import springBoot from './screenshots/springBoot.png'
import distrFileSys from './screenshots/system-arch.png'

const projectList = [
    {
        "id":1,
        "projectName":"Real Time Data Streaming Pipeline",
        "imageLocation": dataPipeline,
        "projectDescription": "This project aims to provide a demonstration of the result of combining Apache Airflow, Apache Kafka, Apache Spark, and Apache Cassandra to set up a pipeline that is able to stream new data into a database. All tools are run within docker containers.",
        "skills": "Python, Kafka, Airflow, Cassandra",
        "repoUrl": "https://github.com/astral004/real-time-data-pipeline"

    },
    {
        "id":2,
        "projectName":"Distributed File System",
        "imageLocation": distrFileSys,
        "projectDescription": "This project aims to simulate an enterprise level file management system that incorporates the ability to make updates to files via REST endpoints, the ability to partition large files while storing, the ability to recombine the partitions while retrieving, and the basis for file partion replication with fault tolerance.",
        "skills": "Python, Flask, REST API",
        "repoUrl": "https://github.com/astral004/distributed-file-system"
    },
    {
        "id":3,
        "projectName":"AppointMake",
        "imageLocation": springBoot,
        "projectDescription": "This is an API intended to simplify and automate appointment scheduling for small-business clinics.",
        "skills": "Java, MongoDB, Spring Boot, REST API",
        "repoUrl": "https://github.com/astral004/AppointMake"
    },
    {
        "id":4,
        "projectName":"Movie Time",
        "imageLocation": favoriteMovies,
        "projectDescription": "This is a full stack app that displays a list of movies as a landing page, and allows the user to select a movie from the list to view in more detail. Users can also select movies and add them to a list of their favorites.",
        "skills": "MongoDB, Express, React, NodeJS",
        "repoUrl": "https://github.com/astral004/MovieTimeUI"
    }
]

export default projectList;