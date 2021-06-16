import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rail, Segment, Header, Table, Button, Icon } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertDetail() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getById(id)
      .then((result) => setJobAdvert(result.data.data));
  }, []);

  let segmentBottom = {
    marginBottom: "35em",
  };

  return (
    <div>
      <Segment textAlign="center" style={segmentBottom}>
        <Rail internal position="left">
          <Segment inverted color="teal">
            İş İlanı Bilgileri
          </Segment>

          <Table basic="very" celled collapsing>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>İş Pozisyon</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>
                  {jobAdvert?.jobPosition?.position}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>
                      <Icon name="location arrow" />
                      Şehir
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.city?.name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>İstihdam Türü</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.employmentType?.name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Çalışma Tipi</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.workingType?.name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Açık Pozisyon Sayısı</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.openPositionCount}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Maaş Aralığı</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.minSalary}<Icon name="try"/>-{jobAdvert?.maxSalary}<Icon name="try"/></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Header as="h4">
                    <Header.Content>
                      <Icon name="calendar" />
                      Son Başvuru Tarihi
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.applicationDeadline}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Açıklama</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell >{jobAdvert?.description}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Rail>

        <Rail internal position="right">
          <Segment inverted color="brown">
            İletişim Bilgileri
          </Segment>
          <Table basic="very" celled collapsing>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content><Icon name="building"/>Şirket Adı</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.employer?.companyName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content><Icon name="mail"/>E Mail</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.employer?.email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  <Header as="h4">
                    <Header.Content><Icon name="phone"/>Telefon Numarası</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.employer?.phoneNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as="h4">
                    <Header.Content>Web Site</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell collapsing>{jobAdvert?.employer?.webAdress}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Rail>
        <Button positive>BAŞVUR</Button>
      </Segment>
    </div>
  );
}
