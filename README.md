# mongodb-homework

### Setup

1. Register in MongoDB Atlas https://www.mongodb.com/cloud/atlas/register
2. Create your own Cluster
3. Connect to the Cluster with any GUI (ex. https://www.mongodb.com/products/compass)
4. Create a new DB in the Cluster
5. Create a "users" collection in the DB, import documents from "users.json" into it

### Installation

1. Clone repo
2. Open the project directory
3. Run the `npm install` command
4. Open the ".env" file and update variables
5. Run the `npm run dev` command
6. Make sure you're successfully connected to the DB

### Tasks

#### Users

User document sample:

```
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "password": "mysecretpassword",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345",
    "country": "USA"
  },
  "createdAt": "2023-05-06T08:12:34.567Z",
  "tags": [
    "Sales",
    "Marketing"
  ]
}
```

```
- Get all users, sort them by age (ascending), and return only 5 records with firstName, lastName, and age fields.
- Add new field 'skills: []" for all users where age >= 25 && age < 30 or tags includes 'Engineering'
- Update the first document and return the updated document in one operation (add 'js' and 'git' to the 'skills' array)
  Filter: the document should contain the 'skills' field
- REPLACE the first document where the 'email' field starts with 'john' and the 'address state' is equal to 'CA'
  Set firstName: "Jason", lastName: "Wood", tags: ['a', 'b', 'c'], department: 'Support'
- Pull tag 'c' from the first document where firstName: "Jason", lastName: "Wood"
- Push tag 'b' to the first document where firstName: "Jason", lastName: "Wood"
  ONLY if the 'b' value does not exist in the 'tags'
- Delete all users by department (Support)
```

#### Articles

Article document sample:

```
{
  name:  'Mongodb - introduction',
  description: 'Mongodb - text',
  type: 'a',
  tags: []
}
```

```
- Create new collection 'articles'
  Using bulk write:
  Create one article per each type (a, b, c)
  Find articles with type a, and update tag list with next value ['tag1-a', 'tag2-a', 'tag3']
  Add tags ['tag2', 'tag3', 'super'] to articles except articles with type 'a'
  Pull ['tag2', 'tag1-a'] from all articles
- Find all articles that contains tags 'super' or 'tag2-a'
```

#### Students Data

```
- Create 'students' collection
- Import all data from 'students.json' into 'students' collection
```

#### Students Statistic (Aggregations)

Article document sample:

```
{
  "name": "Aimee Zank",
  "scores": [
    {
      "score": 1.463179736705023,
      "type": "exam"
    },
    {
      "score": 11.78273309957772,
      "type": "quiz"
    },
    {
      "score": 35.8740349954354,
      "type": "homework"
    }
  ]
}
```

```
- Find the student who have the worst score for homework, the result should be [ { name: <name>, worst_homework_score: <score> } ]
- Calculate the average score for homework for all students, the result should be [ { avg_score: <number> } ]
- Calculate the average score by all types (homework, exam, quiz) for each student, sort from the largest to the smallest value
```
