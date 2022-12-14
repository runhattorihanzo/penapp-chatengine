import Axios from 'axios';

const createUser = async (req, res) => {
  const { userName, userId } = req.body;

  Axios.post(
    'https://api.chatengine.io/projects/people/',
    { username: userName, secret: userId },
    { headers: { 'Private-Key': process.env.chat_engine_private_key } },
  )
    .then(apiRes => {
      res.json({
        body: apiRes.data,
        error: null,
      });
    })

    .catch(() => {
      res.json({
        body: null,
        error: 'There was an error creating the userId',
      });
    });
};

export default createUser;
