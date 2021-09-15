import React from 'react'
import Layout from '../../components/Layout'
import useStyles from '../../utils/styles';

export default function department() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.section}>
        <h1 className={classes.main}>Department</h1>
      </div>
    </Layout>
  )
}
