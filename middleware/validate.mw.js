const yup = require('yup')

module.exports = async (req, res, next) => {
  const validationSchema = yup.object({
    nameUser: yup.string().required('Name is required.'),
    task: yup
      .string()
      .min(3, 'Task text is too short.')
      .max(20, 'Task text is too long.')
      .required('Task text is required.'),
    isDone: yup.bool().oneOf([true, false]).required()
  })
  try {
    req.body = await validationSchema.validate(req.body)
    next()
  } catch (error) {
    res.send(error.message)
  }
}
