import React from 'react'

function main() {
  
    async function f() {
      const request = await fetch('up:yeah:tTutXVZKi31wmDytvxZZWg0zqDEanueIhb6YOe0cOVLlahdcoeHaD9WtdJIMKDKzgHaMPP7w4m5iM0TK7KP32Vfy9exwyQzQotjVixNvgX4yr5llDNi9Wd7bhxYn8915')
      console.log(request)
      return 'a';
      }
      
      f().then(console.log("hello world"));
    
    return f();
}

export default main