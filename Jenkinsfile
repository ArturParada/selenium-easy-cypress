pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "node1"
                    }
                    steps {
                        git branch:'main', url: 'https://github.com/ArturParada/selenium-easy-cypress.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run allTests'
                    }
                }
            }
        }
    }
}
