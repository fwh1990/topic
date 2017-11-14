import {Topic} from './Topic';

const topicHandles = {};

/**
 * 
 * @param {string} topicName
 * @returns {Topic}
 */
const topic = (topicName) => {
  topicName = String(topicName).trim();
  
  if (!topicHandles[topicName]) {
    topicHandles[topicName] = new Topic(topicName);
  }
  
  return topicHandles[topicName];
};

/**
 * @param {{name: string, token: string}} handle
 * @returns {boolean}
 */
topic.unsubscribe = (handle) => {
  return Topic.destroy(handle.name, handle.token);
};

export default topic;
