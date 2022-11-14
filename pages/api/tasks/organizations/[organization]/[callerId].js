import nextConnect from 'next-connect';
import { dbFind } from '../../../../../utils/db-interaction';
import middleware from '../../../../../middleware/database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (
  req,
  res,
) => {
  /**
   * Ideally I'd add the organization ID to the query search (as per yaml file), however I did not have much
   * time left to create this mock data.
   *
   * const organization = req.query.organization ?? '';
   */
  const callerId = req.query.callerId ?? '';

  const tasks = await dbFind(req, 'tasks', 'caller', decodeURI(callerId));

  if (tasks) {
    res.json(tasks);
  } else {
    res.status(200).json({ response: 'Not Found' });
  }
});

export default handler;
