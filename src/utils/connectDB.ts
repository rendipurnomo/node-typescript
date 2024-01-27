/* eslint-disable import/no-duplicates */
import mongoose from 'mongoose'
import config from '../config/environment'
import { logger } from './logger'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Database connected')
  })
  .catch(err => {
    logger.error('Failed to connect database', err)
    process.exit(1)
  })
