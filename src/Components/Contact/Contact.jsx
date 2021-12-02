import React from 'react'
import './contact.css'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'
import balanceImg from '../../Assests/balance.png'

const useStyles = makeStyles((theme) => ({
    contact: {
        color: '#293039'
    },
  underLine: {
    borderTop: "0.4rem solid #293039",
    width: "80%",
    height: "5rem",
    margin: "auto",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
  },
  slide: {
    [theme.breakpoints.down('sm')]: {
        backgroundColor: 'pink'
    }
  }
}));

export default function Contact() {
    const classes =  useStyles();
    return (
        <div className="contact">
        <Container style={{height: '100%'}}>
          <Row className="contact-row">
            <Col md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                src="https://cdn-icons.flaticon.com/png/512/2669/premium/2669443.png?token=exp=1635250190~hmac=9ab6920e5322c858be19a5ccfe793aca"
                className="contact-img"
              />
            </Col>

            <Col md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div className="contactCard">
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    padding: "1.5rem 2rem",
                    paddingBottom: "5px",
                  }}
                >
                  Contact Details In Case Your Rights are being Violated
                </h2>
                <div className={classes.underLine}></div>
                <p style={{ padding: "0 25px" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum est nihil molestiae tempore. Labore dignissimos
                  temporibus cumque, vitae voluptates sapiente, non fuga
                  reiciendis praesentium quisquam obcaecati deleniti libero quae
                  dolor.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
