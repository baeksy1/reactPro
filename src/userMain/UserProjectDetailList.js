import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "./User.css";
import UserProjectDetailModal from "./UserProjectDetailModal";
import ProjectDetailChart from "./ProjectDetailChart";

function UserProjectDetailList() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                (주)승용 (회사이름 불러오기)
              </h3>
              <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">서버 작업내역</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-5 align-self-center">
              <div className="customize-input float-end">
                <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                  <option selected>Aug 23</option>
                  <option value="1">July 23</option>
                  <option value="2">Jun 23</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <li className="nav-item d-none d-md-block">
                    <Link className="nav-link" href="javascript:void(0)">
                      <form>
                        <div className="customize-input">
                          <input
                            className="form-control custom-shadow custom-radius border-0 bg-white"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <i
                            className="form-control-icon"
                            data-feather="search"
                          ></i>
                        </div>
                      </form>
                    </Link>
                  </li>
                  <div className="table-responsive">
                    <div className="project-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">NO</th>
                            <th scope="col">프로젝트 제목(아이디)</th>
                            <th scope="col">서버 종류</th>
                            <th scope="col">점검 종류</th>
                            <th scope="col">시작 일자</th>
                            <th scope="col">종료 일자</th>
                            <th scope="col">소요 시간</th>
                            <th scope="col">담당 엔지니어</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <UserProjectDetailModal />
                            </td>
                            <td>Data</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    BBark SuJung
                                  </h5>
                                  <span className="text-muted font-14">
                                    baeksy97293@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="8">
                              <ProjectDetailChart />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>회사 serverNo2</td>
                            <td>Storage</td>
                            <td>OJJ</td>
                            <td>2023.08.15</td>
                            <td>2023.08.15</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic2.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    BBark SuJung
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="8">
                              <ProjectDetailChart />
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>회사 serverNo3</td>
                            <td>Data</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic3.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    Baek UpDragon
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>회사 serverNo1</td>
                            <td>Data</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic4.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    DDabong Yeji
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>회사 serverNo1</td>
                            <td>Data</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    ZZangsuri
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>회사 serverNo1</td>
                            <td>Data</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic2.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    Jang jjing
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>회사 serverNo1</td>
                            <td>OJJ</td>
                            <td>2023.08.01</td>
                            <td>2023.08.01</td>
                            <td>02:30</td>
                            <td>Data</td>
                            <td className="border-top-0 px-2 py-4;">
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic3.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    HyunJyu
                                  </h5>
                                  <span className="text-muted font-14">
                                    hgover@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>엔지니어팀 회식 일정 공유</td>
                            <td>admin</td>
                            <td>2023.08.22</td>
                            <td>67</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>정기정검 관련 엔지니어팀 공유사항</td>
                            <td>admin</td>
                            <td>2023.08.05</td>
                            <td>7</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>회사 서비스 사용 공지</td>
                            <td>admin</td>
                            <td>2023.08.03</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <th className="border-bottom-0" scope="row">
                              10
                            </th>
                            <td className="border-bottom-0">
                              비용관련 문의 답변주세요
                            </td>
                            <td className="border-bottom-0">BSY9700_</td>
                            <td className="border-bottom-0">2023.08.01</td>
                            <td className="border-bottom-0">3</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <ul className="pagination float-end list">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#" tabindex="-1">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectDetailList;
