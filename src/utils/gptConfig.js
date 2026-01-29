import OpenAI from 'openai';
import { GPT_API_KEY } from './constants';

const client = new OpenAI({
  apiKey: GPT_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true // Allow usage in the browser (not recommended for production)
});

export default client;