<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">

                <div class="breadcrumb-main">
                    <h4 class="text-capitalize breadcrumb-title">数据报表</h4>
                    <div class="breadcrumb-action justify-content-center flex-wrap">
                        <div class="action-btn">

                            <div class="form-group mb-0">
                                <div class="input-container icon-left position-relative">
                                    <span class="input-icon icon-left">
                                        <span data-feather="calendar"></span>
                                    </span>
                                    <input type="text" class="form-control form-control-default date-ranger"
                                        name="date-ranger" placeholder="2023.11.1 - 2023.12.31">
                                    <span class="input-icon icon-right">
                                        <span data-feather="chevron-down"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="dropdown action-btn">
                            <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button"
                                id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="la la-download"></i> 导入
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <span class="dropdown-item">Export With</span>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="la la-print"></i> Printer</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-file-pdf"></i> PDF</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-file-text"></i> Google Sheets</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-file-excel"></i> Excel (XLSX)</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-file-csv"></i> CSV</a>
                            </div>
                        </div> -->
                        <div class="dropdown action-btn">
                            <button class="btn btn-sm btn-default btn-white dropdown-toggle" type="button"
                                id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="la la-share"></i> 分享
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <span class="dropdown-item">分享链接</span>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">
                                    <i class="la la-facebook"></i> Facebook</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-twitter"></i> Twitter</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-google"></i> Google</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-feed"></i> Feed</a>
                                <a href="" class="dropdown-item">
                                    <i class="la la-instagram"></i> Instagram</a>
                            </div>
                        </div>
                        <div class="action-btn">
                            <a href="" class="btn btn-sm btn-primary btn-add">
                                <i class="la la-plus"></i> Add New</a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-xxl-4 col-lg-5 m-bottom-30">

                <div class="card card-overview-progress border-0">
                    <div class="card-header border-0">
                        <div class="d-flex justify-content-between w-100 align-items-center">
                            <h6>数据报表</h6>
                            <!-- <div class="dropdown">
                                <a class="dropdown-toggle btn btn-sm" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Export <span class="la la-angle-down"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card-progress">
                            <div class="card-progress__summery d-flex justify-content-between">
                                <div>
                                    <strong class="color-primary">10</strong>
                                    <span>可用节点</span>
                                </div>
                                <div>
                                    <strong class="color-dark">20</strong>
                                    <span>节点总数</span>
                                </div>
                            </div>
                            <div class="card-progress__bar">
                                <div class="progress">
                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 50%"
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-excerpt">
                                    <!-- <strong><span class="la la-arrow-up"></span>50%</strong> -->
                                    <p class="progress-upword">
                                        节点在线率</p>
                                    <span class="progress-total">50%</span>
                                </div>
                            </div>
                        </div><!-- ends: .card-progress -->
                        <div class="card-progress">
                            <div class="card-progress__summery d-flex justify-content-between">
                                <div>
                                    <strong class="color-info">80</strong>
                                    <span>在线实例</span>
                                </div>
                                <div>
                                    <strong class="color-dark">100</strong>
                                    <span>实例总数</span>
                                </div>
                            </div>
                            <div class="card-progress__bar">
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-excerpt">
                                    <p class="progress-downword">
                                        实例在线率</p>
                                    <span class="progress-total">80%</span>
                                </div>
                            </div>
                        </div><!-- ends: .card-progress -->
                    </div>
                </div><!-- ends: card-overview-progress -->

            </div>
            <div class="col-xxl-8 col-lg-7 m-bottom-30">

                <div class="card broder-0">
                    <div class="card-header">
                        <h6>最近数据</h6>
                        <div class="card-extra">
                            <ul class="perfomence-tab-links card-tab-links mr-3 nav-tabs nav">
                                <li>
                                    <a href="#w_perfomence-week" data-toggle="tab" id="w_perfomence-week-tab" role="tab"
                                        area-controls="w_perfomence" aria-selected="false">周</a>
                                </li>
                                <li>
                                    <a href="#w_perfomence-month" data-toggle="tab" id="w_perfomence-month-tab" role="tab"
                                        area-controls="w_perfomence" aria-selected="false">月</a>
                                </li>
                                <li>
                                    <a class="active" href="#w_perfomence-year" data-toggle="tab" id="w_perfomence-year-tab"
                                        role="tab" area-controls="w_perfomence" aria-selected="true">年</a>
                                </li>
                            </ul>
                            <div class="dropdown dropleft">
                                <a href="#" role="button" id="performance" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span data-feather="more-horizontal"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="performance">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ends: .card-header -->
                    <div class="card-body pt-0">
                        <div class="tab-content perfomence-tab-wrap">
                            <div class="tab-pane fade" id="w_perfomence-week" role="tabpanel"
                                aria-labelledby="w_perfomence-week">
                                <div class="performance-stats nav-tabs nav">
                                    <a href="#w_ps_user" data-toggle="tab" id="w_ps_user-tab" role="tab"
                                        area-controls="w_ps_user" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>新建</span>
                                            <strong>13 <sub>
                                                    <i class="la la-arrow-up"></i> 25%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#w_ps_session" data-toggle="tab" id="w_ps_session-tab" role="tab"
                                        area-controls="w_ps_session" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>删除</span>
                                            <strong>3 <sub>
                                                    <i class="la la-arrow-up"></i> 46%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#w_ps_bRate" class="active" data-toggle="tab" id="w_ps_bRate-tab" role="tab"
                                        area-controls="w_ps_bRate" aria-selected="true">
                                        <div class="performance-stats__down">
                                            <span>暂停</span>
                                            <strong>5 <sub>
                                                    <i class="la la-arrow-down"></i> 12%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <!-- <a href="#w_ps_sDuration" data-toggle="tab" id="w_ps_sDuration-tab" role="tab"
                                        area-controls="w_ps_sDuration" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Session Duration</span>
                                            <strong>2m 43s <sub>
                                                    <i class="la la-arrow-up"></i> 33%</sub>
                                            </strong>
                                        </div>
                                    </a> -->
                                </div>
                                <!-- ends: .performance-stats -->

                                <div class="wp-chart perfomence-chart">
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="w_ps_user" role="tabpanel"
                                            aria-labelledby="w_ps_user-tab">
                                            <div id="currentEcharts" style="width: 100%;height: 150px;"></div>
                                        </div>
                                        <div class="tab-pane fade" id="w_ps_session" role="tabpanel"
                                            aria-labelledby="w_ps_session-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_S_W"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade active show" id="w_ps_bRate" role="tabpanel"
                                            aria-labelledby="w_ps_bRate-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_R_W"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="w_ps_sDuration" role="tabpanel"
                                            aria-labelledby="w_ps_user-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_Sd_W"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="w_perfomence-month" role="tabpanel"
                                aria-labelledby="w_perfomence-month">
                                <div class="performance-stats nav-tabs nav">
                                    <a href="#m_ps_user" data-toggle="tab" id="m_ps_user-tab" role="tab"
                                        area-controls="m_ps_user" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Users</span>
                                            <strong>76.2k <sub>
                                                    <i class="la la-arrow-up"></i> 25%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#m_ps_session" data-toggle="tab" id="m_ps_session-tab" role="tab"
                                        area-controls="m_ps_session" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Sessions</span>
                                            <strong>87.6k <sub>
                                                    <i class="la la-arrow-up"></i> 46%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#m_ps_bRate" class="active" data-toggle="tab" id="m_ps_bRate-tab" role="tab"
                                        area-controls="m_ps_bRate" aria-selected="true">
                                        <div class="performance-stats__down">
                                            <span>Bounce Rate</span>
                                            <strong>45% <sub>
                                                    <i class="la la-arrow-down"></i> 12%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#m_ps_sDuration" data-toggle="tab" id="m_ps_sDuration-tab" role="tab"
                                        area-controls="m_ps_sDuration" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Session Duration</span>
                                            <strong>2m 43s <sub>
                                                    <i class="la la-arrow-up"></i> 33%</sub>
                                            </strong>
                                        </div>
                                    </a>
                                </div>
                                <!-- ends: .performance-stats -->

                                <div class="wp-chart perfomence-chart">
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="m_ps_user" role="tabpanel"
                                            aria-labelledby="m_ps_user-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_U_M"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="m_ps_session" role="tabpanel"
                                            aria-labelledby="m_ps_session-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_S_M"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade active show" id="m_ps_bRate" role="tabpanel"
                                            aria-labelledby="m_ps_bRate-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_R_M"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="m_ps_sDuration" role="tabpanel"
                                            aria-labelledby="m_ps_user-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_Sd_M"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade active show" id="w_perfomence-year" role="tabpanel"
                                aria-labelledby="w_perfomence-year">
                                <div class="performance-stats nav-tabs nav">
                                    <a href="#y_ps_user" data-toggle="tab" id="y_ps_user-tab" role="tab"
                                        area-controls="y_ps_user" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Users</span>
                                            <strong>76.2k <sub>
                                                    <i class="la la-arrow-up"></i> 25%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#y_ps_session" data-toggle="tab" id="y_ps_session-tab" role="tab"
                                        area-controls="y_ps_session" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Sessions</span>
                                            <strong>87.6k <sub>
                                                    <i class="la la-arrow-up"></i> 46%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#y_ps_bRate" class="active" data-toggle="tab" id="y_ps_bRate-tab" role="tab"
                                        area-controls="y_ps_bRate" aria-selected="true">
                                        <div class="performance-stats__down">
                                            <span>Bounce Rate</span>
                                            <strong>45% <sub>
                                                    <i class="la la-arrow-down"></i> 12%</sub>
                                            </strong>
                                        </div>
                                    </a>

                                    <a href="#y_ps_sDuration" data-toggle="tab" id="y_ps_sDuration-tab" role="tab"
                                        area-controls="y_ps_sDuration" aria-selected="false">
                                        <div class="performance-stats__up">
                                            <span>Session Duration</span>
                                            <strong>2m 43s <sub>
                                                    <i class="la la-arrow-up"></i> 33%</sub>
                                            </strong>
                                        </div>
                                    </a>
                                </div>
                                <!-- ends: .performance-stats -->

                                <div class="wp-chart perfomence-chart">
                                    <div class="tab-content">
                                        <div class="tab-pane fade" id="y_ps_user" role="tabpanel"
                                            aria-labelledby="y_ps_user-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_U_Y"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="y_ps_session" role="tabpanel"
                                            aria-labelledby="y_ps_session-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_S_Y"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade active show" id="y_ps_bRate" role="tabpanel"
                                            aria-labelledby="y_ps_bRate-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_R_Y"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="tab-pane fade" id="y_ps_sDuration" role="tabpanel"
                                            aria-labelledby="y_ps_user-tab">
                                            <div class="parentContainer">


                                                <div>
                                                    <canvas id="wpChart_Sd_Y"></canvas>
                                                </div>


                                            </div>
                                            <ul class="legend-static">
                                                <li class="custom-label">
                                                    <span style="background-color: rgb(95, 99, 242);"></span>Current Period
                                                </li>
                                                <li class="custom-label">
                                                    <span style="background-color: #C6D0DC"></span>Previous Period
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ends: .card-body -->
                </div>

            </div>
            <div class="col-xxl-8 m-bottom-30">

                <div class="card border-0">
                    <div class="card-header">
                        <h6>数据大全</h6>
                        <div class="card-extra">
                            <ul class="card-tab-links mr-3 nav-tabs nav">
                                <li>
                                    <a class="active" href="#t_channel-today" data-toggle="tab" id="t_channel-today-tab"
                                        role="tab" area-controls="t_channel-table" aria-selected="true">最近创建</a>
                                </li>
                                <li>
                                    <a href="#t_channel-week" data-toggle="tab" id="t_channel-week-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="false">用量排行</a>
                                </li>
                                <li>
                                    <a href="#t_channel-month" data-toggle="tab" id="t_channel-month-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="fasle">系统日志</a>
                                </li>
                                <!-- <li>
                                    <a href="#t_channel-year" data-toggle="tab" id="t_channel-year-tab" role="tab"
                                        area-controls="t_channel-table" aria-selected="false">Year</a>
                                </li> -->
                            </ul>
                            <div class="dropdown dropleft">
                                <a href="#" role="button" id="traffic" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span data-feather="more-horizontal"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="traffic">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="t_channel-today" role="tabpanel"
                                aria-labelledby="t_channel-today-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>最新创建</th>
                                                <th>区域</th>
                                                <th>IP地址</th>
                                                <th>配置</th>
                                                <th style="max-width: 150px">Percentage of Traffic (%)</th>
                                                <th>状态</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Direct</td>
                                                <td>3,256</td>
                                                <td>3.5%</td>
                                                <td>225</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-primay" role="progressbar"
                                                            style="width: 65.75%" aria-valuenow="65.75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>65.75%</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>4,658</td>
                                                <td>1.9%</td>
                                                <td>753</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-secondary" role="progressbar"
                                                            style="width: 85.14%" aria-valuenow="85.14" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>85.14%</td>
                                            </tr>
                                            <tr>
                                                <td>Organic Search</td>
                                                <td>1,698</td>
                                                <td>7.5%</td>
                                                <td>159</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 95.36%" aria-valuenow="95.36" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>95.36%</td>
                                            </tr>
                                            <tr>
                                                <td>Referral</td>
                                                <td>2,856</td>
                                                <td>4.6%</td>
                                                <td>456</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 45.25%" aria-valuenow="45.25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.25%</td>
                                            </tr>
                                            <tr>
                                                <td>Social Media</td>
                                                <td>9,456</td>
                                                <td>3.2%</td>
                                                <td>852</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>39.94%</td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td>8,247</td>
                                                <td>1.2%</td>
                                                <td>321</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar"
                                                            style="width: 60.58%" aria-valuenow="60.58" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>60.58%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-week" role="tabpanel"
                                aria-labelledby="t_channel-week-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Sessions</th>
                                                <th>Goal Conv. Rate</th>
                                                <th>Goals Completions</th>
                                                <th style="max-width: 150px">Percentage of Traffic (%)</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Direct</td>
                                                <td>5,256</td>
                                                <td>7.5%</td>
                                                <td>240</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-primay" role="progressbar"
                                                            style="width: 65.75%" aria-valuenow="65.75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>66.75%</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>7,658</td>
                                                <td>8.9%</td>
                                                <td>453</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-secondary" role="progressbar"
                                                            style="width: 85.14%" aria-valuenow="85.14" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>40.14%</td>
                                            </tr>
                                            <tr>
                                                <td>Organic Search</td>
                                                <td>1,398</td>
                                                <td>5.5%</td>
                                                <td>259</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 95.36%" aria-valuenow="95.36" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>55.36%</td>
                                            </tr>
                                            <tr>
                                                <td>Referral</td>
                                                <td>2,556</td>
                                                <td>6.6%</td>
                                                <td>756</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 45.25%" aria-valuenow="45.25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>40.25%</td>
                                            </tr>
                                            <tr>
                                                <td>Social Media</td>
                                                <td>8,456</td>
                                                <td>3.6%</td>
                                                <td>452</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>30.94%</td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td>6,247</td>
                                                <td>1.8%</td>
                                                <td>321</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar"
                                                            style="width: 60.58%" aria-valuenow="60.58" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>60.58%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-month" role="tabpanel"
                                aria-labelledby="t_channel-month-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>时间</th>
                                                <th>描述</th>
                                                <th>用户名</th>
                                                <th style="max-width: 150px">IP地址 (%)</th>
                                                <th>测试</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Direct</td>
                                                <td>6,256</td>
                                                <td>3.5%</td>
                                                <td>325</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-primay" role="progressbar"
                                                            style="width: 65.75%" aria-valuenow="65.75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>65.75%</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>4,658</td>
                                                <td>1.9%</td>
                                                <td>753</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-secondary" role="progressbar"
                                                            style="width: 85.14%" aria-valuenow="85.14" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>85.14%</td>
                                            </tr>
                                            <tr>
                                                <td>Organic Search</td>
                                                <td>1,698</td>
                                                <td>7.5%</td>
                                                <td>159</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 95.36%" aria-valuenow="95.36" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>95.36%</td>
                                            </tr>
                                            <tr>
                                                <td>Referral</td>
                                                <td>2,856</td>
                                                <td>4.6%</td>
                                                <td>456</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 45.25%" aria-valuenow="45.25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.25%</td>
                                            </tr>
                                            <tr>
                                                <td>Social Media</td>
                                                <td>9,456</td>
                                                <td>3.2%</td>
                                                <td>852</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>39.94%</td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td>8,247</td>
                                                <td>1.2%</td>
                                                <td>321</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar"
                                                            style="width: 60.58%" aria-valuenow="60.58" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>60.58%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="t_channel-year" role="tabpanel"
                                aria-labelledby="t_channel-year-tab">
                                <div class="table-responsive">
                                    <table class="table table--default traffic-table">
                                        <thead>
                                            <tr>
                                                <th>Channel</th>
                                                <th>Sessions</th>
                                                <th>Goal Conv. Rate</th>
                                                <th>Goals Completions</th>
                                                <th style="max-width: 150px">Percentage of Traffic (%)</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Direct</td>
                                                <td>7,256</td>
                                                <td>4.5%</td>
                                                <td>265</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-primay" role="progressbar"
                                                            style="width: 65.75%" aria-valuenow="65.75" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>65.75%</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>6,658</td>
                                                <td>4.9%</td>
                                                <td>453</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-secondary" role="progressbar"
                                                            style="width: 85.14%" aria-valuenow="85.14" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.14%</td>
                                            </tr>
                                            <tr>
                                                <td>Organic Search</td>
                                                <td>4,698</td>
                                                <td>6.5%</td>
                                                <td>359</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 95.36%" aria-valuenow="95.36" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>95.36%</td>
                                            </tr>
                                            <tr>
                                                <td>Referral</td>
                                                <td>6,856</td>
                                                <td>4.6%</td>
                                                <td>156</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 45.25%" aria-valuenow="45.25" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>45.25%</td>
                                            </tr>
                                            <tr>
                                                <td>Social Media</td>
                                                <td>9,456</td>
                                                <td>3.2%</td>
                                                <td>752</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 39.94%" aria-valuenow="39.94" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>39.94%</td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td>1,247</td>
                                                <td>5.2%</td>
                                                <td>421</td>
                                                <td>
                                                    <div class="progress">
                                                        <div class="progress-bar bg-danger" role="progressbar"
                                                            style="width: 60.58%" aria-valuenow="60.58" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>60.58%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-xxl-6 m-bottom-30">

                <div class="card border-0">
                    <div class="card-header">
                        <h6>节点区域</h6>
                        <div class="card-extra">
                            <ul class="card-tab-links mr-3 nav-tabs nav">
                                <li>
                                    <a href="#se_region-today" class="active" data-toggle="tab" id="se_region-today-tab"
                                        role="tab" area-controls="se_region-table" aria-selected="true">Today</a>
                                </li>
                                <li>
                                    <a href="#se_region-week" data-toggle="tab" id="se_region-week-tab" role="tab"
                                        area-controls="se_region-table" aria-selected="false">Week</a>
                                </li>
                                <li>
                                    <a href="#se_region-month" data-toggle="tab" id="se_region-month-tab" role="tab"
                                        area-controls="se_region-table" aria-selected="false">Month</a>
                                </li>
                                <li>
                                    <a href="#se_region-year" data-toggle="tab" id="se_region-year-tab" role="tab"
                                        area-controls="se_region-table" aria-selected="false">Year</a>
                                </li>
                            </ul>
                            <div class="dropdown dropleft">
                                <a href="#" role="button" id="else" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span data-feather="more-horizontal"></span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="else">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="se_region-today" role="tabpanel"
                                aria-labelledby="se_region-today-tab">
                                <div class="row">
                                    <div class="col-md-5">

                                        <div class="table-responsive table-top-regions">
                                            <table class="table table--default table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Top Regions</th>
                                                        <th>Sessions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>United States</td>
                                                        <td>26,457</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Australia</td>
                                                        <td>4,658</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Canada</td>
                                                        <td>1,698</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Japan</td>
                                                        <td>2,856</td>
                                                    </tr>
                                                    <tr>
                                                        <td>India</td>
                                                        <td>5,456</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bangladesh</td>
                                                        <td>5,796</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brazil</td>
                                                        <td>6,458</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="col-md-7 d-flex align-items-center justify-content-center">
                                        <div class="regions-svg">
                                            <div id="s_region-map_T"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="se_region-week" role="tabpanel"
                                aria-labelledby="se_region-week-tab">
                                <div class="row">
                                    <div class="col-md-5">

                                        <div class="table-responsive table-top-regions">
                                            <table class="table table--default table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Top Regions</th>
                                                        <th>Sessions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>United States</td>
                                                        <td>26,457</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Australia</td>
                                                        <td>4,658</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Canada</td>
                                                        <td>1,698</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Japan</td>
                                                        <td>2,856</td>
                                                    </tr>
                                                    <tr>
                                                        <td>India</td>
                                                        <td>5,456</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bangladesh</td>
                                                        <td>5,796</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brazil</td>
                                                        <td>6,458</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="col-md-7 d-flex align-items-center justify-content-center">
                                        <div class="regions-svg">
                                            <div id="s_region-map_W"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="se_region-month" role="tabpanel"
                                aria-labelledby="se_region-month-tab">
                                <div class="row">
                                    <div class="col-md-5">

                                        <div class="table-responsive table-top-regions">
                                            <table class="table table--default table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Top Regions</th>
                                                        <th>Sessions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>United States</td>
                                                        <td>26,457</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Australia</td>
                                                        <td>4,658</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Canada</td>
                                                        <td>1,698</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Japan</td>
                                                        <td>2,856</td>
                                                    </tr>
                                                    <tr>
                                                        <td>India</td>
                                                        <td>5,456</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bangladesh</td>
                                                        <td>5,796</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brazil</td>
                                                        <td>6,458</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="col-md-7 d-flex align-items-center justify-content-center">
                                        <div class="regions-svg">
                                            <div id="s_region-map_M"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="se_region-year" role="tabpanel"
                                aria-labelledby="se_region-year-tab">
                                <div class="row">
                                    <div class="col-md-5">

                                        <div class="table-responsive table-top-regions">
                                            <table class="table table--default table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>Top Regions</th>
                                                        <th>Sessions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>United States</td>
                                                        <td>26,457</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Australia</td>
                                                        <td>4,658</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Canada</td>
                                                        <td>1,698</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Japan</td>
                                                        <td>2,856</td>
                                                    </tr>
                                                    <tr>
                                                        <td>India</td>
                                                        <td>5,456</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bangladesh</td>
                                                        <td>5,796</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brazil</td>
                                                        <td>6,458</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                    <div class="col-md-7 d-flex align-items-center justify-content-center">
                                        <div class="regions-svg">
                                            <div id="s_region-map_Y"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'Console',
    head() {
        return {
            title: '控制中心 - QimenIDC',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '控制中心 - QimenIDC'
                }
            ],
            script: [
                { src: '/assets/vendor_assets/js/Chart.min.js' },
                { src: '/assets/vendor_assets/js/charts.js' },
                { src: '/assets/vendor_assets/js/google-chart.js' },
            ]
        }
    },
    methods: {
        currentEcharts() {
            // 找到容器
            let networkEcharts = document.getElementById('currentEcharts')
            // 初始化echarts实例
            let myChart = this.$echarts.init(networkEcharts)
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: 'Stacked Line'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表
            myChart.setOption(option)
        },
    },
    mounted() {
        this.currentEcharts()
    }
}
</script>