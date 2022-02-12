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
            steps {
                cleanWs()
                checkout scm
                echo "Building ${env.BRANCH_NAME}..."
            }
        }
        stage('Building Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Building Application') {
            steps {
                sh 'npm run build --production'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/cash-overflow/*'
        }
    }
}