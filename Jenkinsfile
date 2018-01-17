pipeline {
  agent any
  stage('Init') {
    steps {
      sh 'npm install'
    }
  }
  stage('Test') {
    steps {
      echo "Testing"
      sh 'npm Test'
    }
  }
  stage('Deploy') {
    steps {
      echo "Code Deployed"
    }
  }
}
