const yup = require('yup')

const validationSchema = yup.object({
  userName: yup.string().required('Name is required.'),
  task: yup
    .string()
    .min(3, 'Task text is too short.')
    .max(50, 'Task text is too long.')
    .required('Task text is required.'),
  isDone: yup.bool().oneOf([true, false]).required()
})

module.exports = async (req, res, next) => {
  try {
    req.body = await validationSchema.validate(req.body)
    next()
  } catch (error) {
    res.status(400).send(error.message)
  }
}
