interface IConfig {
  MongoURL: string;
  MongoURL_Local: string;
  Options: object;
}

const Config: IConfig = {
  MongoURL: process.env.MONGO_URL_LOCAL || '',
  MongoURL_Local: process.env.MONGO_URL_LOCAL || '',
  Options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

export default Config;
