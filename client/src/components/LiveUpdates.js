import React from 'react'
import { Skeleton, Card, Icon, Avatar,Typography } from 'antd';
const { Meta } = Card;
const { Text,Title } = Typography;

export default function LiveUpdates() {
  return (
    <div className="live">
    <Text ><Title><span style={{"color":"grey"}}>&nbsp; Interview Prep</span></Title></Text>
       {/*
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card> */}
  <button class="alert alert-dismissible alert-warning">
  <h4 class="alert-heading">TCS</h4>
</button>
<button class="alert alert-dismissible alert-success">
  <h4 class="alert-heading">Infosys</h4>
</button>
<button class="alert alert-dismissible alert-info">
  <h4 class="alert-heading">SSC</h4>
</button>
<button class="alert alert-dismissible alert-danger">
  <h4 class="alert-heading">SSC</h4>
</button>

    </div>
  )
}
