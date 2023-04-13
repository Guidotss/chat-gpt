interface IConfig {
  MongoURL: string;
  MongoLocal: string;
  Options: object;
}

const Config: IConfig = {
  MongoURL: process.env.MONGO_URL || '',
  MongoLocal: process.env.MONGO_URL_LOCAL || '',
  Options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

export default Config;
