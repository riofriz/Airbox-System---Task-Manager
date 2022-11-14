export const dbDump = async (req, collection) => req.db.collection(collection).find({}).toArray();

export const dbFind = async (req, collection, key, value) => req.db.collection(collection).find({ [key]: value }).toArray();

export const dbFindOne = async (req, collection, key, value) => req.db.collection(collection).findOne({ [key]: value });

export const dbItems = async (req, collection, data) => req.db.collection(collection).insert(data);
