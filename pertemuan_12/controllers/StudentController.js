// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    try {
      const {nama, nim, email, jurusan} = req.body

      // validation params is empty
      if (nama.length == 0) {
          let result = {
              message: 'Name cannot be null'
          }
          return res.json(result)
      }
      if (nim.length == 0) {
          let result = {
              message: 'Nim cannot be null'
          }
          return res.json(result)
      }
      if (email.length == 0) {
          let result = {
              message: 'Phone cannot be null'
          }
          return res.json(result)
      }
      if (jurusan.length == 0) {
          let result = {
              message: 'email cannot be null'
          }
          return res.json(result)
      }

      // set params
      const params = {
          nama, nim, email, jurusan
      }
      // call model function
      await model.create(params)

      let result = {
          message: 'Success: berhasil menabahkan data students!'
      }

      res.json(result)

      } catch (error) {
          const result = {
              message: 'Failed: gagal menambahkan data students!',
              error: error.message
          }

          res.json(result)
      }

        const data = {
          message: "Menambahkan data student",
          data: [],
        };

        res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;