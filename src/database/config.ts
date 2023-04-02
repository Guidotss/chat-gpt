interface IConfig {
  MongoURL: string;
  Options: object;
}

const Config: IConfig = {
  MongoURL: process.env.MONGO_URL || '',
  Options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

export default Config;
