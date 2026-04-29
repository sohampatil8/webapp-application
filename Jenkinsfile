pipeline{
    agent any
    
    environment {
        IMAGE_NAME = "sohampatil08/webapp"
        CONTAINER_NAME = "webapp-container"
    }
    
    // triggers {
    //     pollSCM('H/2 * * * *')   // checks every 2 minutes
    // }
    
    stages{
        stage('checkout code'){
            steps {
                git branch: 'main', url: 'https://github.com/sohampatil8/webapp-application.git'
            }
        }
        stage('build code'){
            steps {
                sh 'docker build -t sohampatil08/webapp .'
            }
        }
        stage('push code'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                sh 'docker push sohampatil08/webapp'
                }
            }
        }
        stage('deploy code'){
            steps{
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker pull $IMAGE_NAME
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }
}