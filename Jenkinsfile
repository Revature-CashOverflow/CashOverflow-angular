pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    tools {
        nodejs 'node'
    }

    environment {
        DATE = new Date().format('yy.M')
        TAG = "${DATE}.${BUILD_NUMBER}"
        DOCKER_REPO = 'cashoverflow-angular'
        DOCKER_USER = 'rasc0l'
    }

    stages {
        stage('Clean workspace') {
            cleanWs()
            checkout scm
            echo "Building ${env.BRANCH_NAME}..."
        }
        stage('Building Dependencies') {
            sh 'npm install'
        }
        stage('Building Application') {
            sh 'npm run build --production'
        }
        stage('Docker Build') {
            steps {
                script {
                    if (env.BRANCH_NAME  == 'main') {
                        docker.build("${DOCKER_USER}/${DOCKER_REPO}:${env.BRANCH_NAME}-${TAG}")
                    }
                }
            }
        }
        stage('Pushing Docker Image') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        docker.withRegistry('https://registry.hub.docker.com', 'docker-creds') {
                            docker.image("${DOCKER_USER}/${DOCKER_REPO}:${env.BRANCH_NAME}-${TAG}").push()
                            docker.image("${DOCKER_USER}/${DOCKER_REPO}:${env.BRANCH_NAME}-${TAG}").push('latest')
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        sh "docker stop ${env.BRANCH_NAME}-${DOCKER_REPO} | true"
                        sh "docker rm ${env.BRANCH_NAME}-${DOCKER_REPO} | true"
                        sh "docker run --name ${env.BRANCH_NAME}-${DOCKER_REPO} -d -p 80:4200 ${DOCKER_USER}/${DOCKER_REPO}:${env.BRANCH_NAME}-${TAG}"
                    }
                }
            }
        }
    }
}