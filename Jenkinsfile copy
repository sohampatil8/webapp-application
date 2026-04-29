pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t sohampatil08/webapp .'
      }
    }
    stage('Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
          sh 'docker push sohampatil08/webapp'
        }
      }
    }
    stage('Test') {
      steps {
        sh 'echo "Run tests here"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'kubectl apply -f deployment.yaml'
        sh 'kubectl apply -f service.yaml'
      }
    }
  }
}