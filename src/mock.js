// src/mock.js  
import Mock from 'mockjs';  

// 定义模拟数据  
// 这里使用 Mock.Random 来生成随机数据  
const Random = Mock.Random;  

Mock.mock('/api/user', 'get', {  
  code: 200,  
  message: 'success',  
  data: {  
    id: Random.id(),  
    name: Random.name(),  
    age: Random.integer(18, 60),  
    email: Random.email(),  
  },  
});  

// 可以添加更多的接口  
Mock.mock('/api/products', 'get', {  
  code: 200,  
  message: 'success',  
  'data|10': [  
    {  
      id: '@id',  
      name: '@word(3, 7)',  
      price: '@float(10, 100, 2, 2)',  
      description: '@sentence(5, 10)',  
    },  
  ],  
});  

//员工一览的MOCK
Mock.mock('/api/employee', 'get', {  
  code: 200,  
  message: 'success',  
  'data|10': [  
    {  
      id: '@increment',  
      name: '@name',  
      number: '@integer(10, 1000)',  
      sex: '男',  
      age:'@integer(20, 50)',
      department: "第一开发部",
      jobTitle: "PG",
      firstWorkTime: "2020/10/10",
      statusOrNot: "在职",
      childOrNot: "有",
      marriageStatus: "未婚",
    },  
  ],  
});  

// 测试接口  
Mock.mock('/api/test', 'post', (options) => {  
  console.log('Received data', JSON.parse(options.body));  
  return {  
    code: 200,  
    message: 'Data received successfully',  
  };  
});