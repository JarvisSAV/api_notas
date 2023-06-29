import conn from './conexion.js'

export const getAll = () => {
	return new Promise((resolve, reject) => {
		conn.query('select * from notes;', function (error, results, fields) {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

export const getOneNote = ({ id }) => {
	return new Promise((resolve, reject) => {
		conn.query(`SELECT * from notes where id = ${id}`, function (error, results, fields) {
			if (error) {
				reject(error);
			} else {
				resolve(results)
			}
		});
	});
}

export const postNote = ({ body, files }) => {
	const { content, important, date } = JSON.parse(body.producto)
	return new Promise((resolve, reject) => {
		conn.query(`INSERT INTO name values (null,?,?,?)`,
			[content, important, date],
			(error, results, fields) => {
				if (error) {
					reject(error)
				} else {
					resolve(results.affectedRows)
				}
			})
	})
}

export const deleteNote = ({ id }) => {
	return new Promise((resolve, reject) => {
		conn.query(`UPDATE productos set \`as\` = 0 where id = ${id}`, function (error, results, fields) {
			if (error) {
				reject(error);
			} else {
				resolve(results.affectedRows)
			}
		});
	});
}