pipeline {
  agent any
  stages{
  stage('Init') {
    steps {
      sh 'npm install'
    }
  }
  stage('Test') {
    steps {
      echo "Testing"
      sh 'npm test'
    }
  }
  stage('Deploy') {
    steps {
      echo "Code Deployed"
    }
  }
}
