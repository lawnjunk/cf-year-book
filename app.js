'use strict';

var studentList = [];
var wrap = document.getElementById('test');
var studentGroupButton = document.getElementById('student-group-button');
var data;
var addMoreStudents = true;

console.log('hello world');

function Student (firstName, lastName, imgSrc, linkdIn, gitHubURL) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.imgSrc = imgSrc;
  this.linkdIn = linkdIn;
  this.gitHubURL = gitHubURL;
  studentList.push(this);
  this.studentID = studentID();
}
var studentID = function() {
  return Math.random() + '' + Math.random();
};

function StudentGroupProject (students, imgSrc, title, discription, repoURL, deployedURL) {
  this.students = studentList;
  this.imgSrc = imgSrc;
  this.title = title;
  this.discription = discription;
  this.repoURL = repoURL;
  this.deployedURL = deployedURL;

}

function handleStudentSubmit(event){
  // stop the browser from reloading
  event.preventDefault();
  var form = event.target;

//  var studentFName = form.firstName.value;
  var studentLname = form.lastName.value;
  var studentImage = form.studentImg.value;
  var studentLink = form.linkdIn.value;
  var studentGitHub = form.gitHub.value;

  form.firstName.value = '';
  form.lastName.value = '';
  form.studentImg.value = '';
  form.linkdIn.value = '';
  form.gitHub.value = '';

  var studentUpload = new Student (studentFName, studentLname, studentImage, studentLink, studentGitHub);
  console.log(studentList);
  localStorage.data = JSON.stringify(studentList);
  console.log(localStorage.data);

  // var addImage1 = document.createElement('div');
  var addImage = document.createElement('img');
  addImage.src = studentImage;
  app.appendChild(addImage);

}
try {
  studentList = JSON.parse(localStorage.data);
  console.log(studentList);
} catch (error) {
  console.log('no data');
}

var sel = document.getElementById('group-form');
console.log(studentList);


  for(var i = 0; i < studentList.length; i++) {
    var opt = document.createElement('option');
    opt.text = studentList[i].firstName + ' ' + studentList[i].lastName;
    console.log(opt.innerHTML);
    opt.value = studentList[i].firstName;
    sel.appendChild(opt);
  }

try {
  var storeCreateFrom = document.getElementById('submit');
  storeCreateFrom.addEventListener('submit', handleStudentSubmit);
} catch (error) {
  console.log('error');
}

try {
  var addGroup = document.getElementById('submit-group');
  addGroup.addEventListener('submit', addAGroup)
}  catch (error) {
  console.log('error');
}
try {
  var addStudent = document.getElementById('add-student');
  addStudent.addEventListener('click', addAGroupMemeber)
}  catch (error) {
  console.log('error');
}
function addAGroup() {
console.log('works');
}
function addAGroupMember() {
  var opt = document.createElement('option');
  opt.text = studentList[i].firstName + ' ' + studentList[i].lastName;
  console.log(opt.innerHTML);
  opt.value = studentList[i].firstName;
  sel.appendChild(opt);
}
