const mongodb = require('mongodb')

const client = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'

const db_name = 'Hospital'

const insertData=(dup)=>{
	client.connect(url,{useNewUrlParser:true},(error,result)=>{
		var arr = dup

		const db = result.db(db_name)

		db.collection('appointment_details').insertOne(arr,(error,result)=>{
			if(error){
				return console.log('error occured')
			}
			console.log('inserted successfully')
		})
	})
}

const registerData =(dup)=>{
	client.connect(url,{useNewUrlParser:true},(error,result)=>{
		var arr = dup

		const db = result.db(db_name)

		db.collection('Register_details').insertOne(arr,(error,result)=>{
			if(error){
				return console.log('error occured')
			}
			console.log('inserted successfully')
		})
	})
}


module.exports = {
	insertData : insertData,
	registerData : registerData
}