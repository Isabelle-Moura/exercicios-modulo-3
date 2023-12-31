const { ObjectId } = require('mongodb');

class BookRepository {
    constructor(collection) {
        this.collection = collection
    }

    async create(book) {
        await this.collection.insertOne(book)
    }

    findAll() {
        return this.collection.find().toArray()
    }

    findAllByAuthor(author) {
        return this.collection.find({ author }).toArray()
    }
    findAllByTitle(title) {
        return this.collection.find({ title }).toArray()
    }

    findById(id) {
        return this.collection.findOne({ _id: new ObjectId(id) })
    }

    async update(id, updatedBook) {
        await this.collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedBook }
        );
    }

    async delete(id) {
        await this.collection.deleteOne({ _id: new ObjectId(id) })
    }
}

module.exports = BookRepository