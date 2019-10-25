import db from '../src/models';

class BookService {
  static async getAllBooks() {
    try {
      return await db.Book.findAll();
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async getABook(id) {
    try {
      const theBook = await db.Book.findOne({
        where: { id: Number(id) }
      });

      return theBook;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async addBook(newBook) {
    try {
      return await db.Book.create(newBook);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static async updateBook(id, updateBook) {
    try {
      const bookToUpdate = await db.Book.findOne({
        where: { id: Number(id) }
      });

      if (bookToUpdate) {
        await db.Book.update(updateBook, { where: { id: Number(id) } });

        return updateBook;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }


  static async deleteBook(id) {
    try {
      const bookToDelete = await db.Book.findOne({ where: { id: Number(id) } });

      if (bookToDelete) {
        const deletedBook = await db.Book.destroy({
          where: { id: Number(id) }
        });
        return deletedBook;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

export default BookService;
