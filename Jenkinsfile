pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    tools {
        nodejs 'node'
        hudson.plugins.sonar.SonarRunnerInstallation 'sonar-scanner'
    }

    environment {
        DATE = new Date().format('yy.M')
        TAG = "${DATE}.${BUILD_NUMBER}"
        SONAR_TOKEN = credentials('SONAR_TOKEN')
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
                sh "sonar-scanner -Dsonar.projectKey=Revature-CashOverflow_CashOverflow-angular -Dsonar.branch.name=${env.BRANCH_NAME}"
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