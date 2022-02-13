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
        stage('Sonar Scan') {
            steps {
                sh 'sonar-scanner'
            }
        }
        stage('Building Application') {
            steps {
                sh 'npm run build-prod'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/cash-overflow/*'
        }
    }
}