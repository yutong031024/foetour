var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23341231690347897,
        "pitch": -0.09717653738307241,
        "fov": 1.356139732925779
      },
      "linkHotspots": [
        {
          "yaw": 0.2334123113922839,
          "pitch": -0.09717653560205974,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8131348490618588,
          "pitch": 0.1576305741924724,
          "title": "Welcome to Faculty of Engineering",
          "text": "hello world :&gt;"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2942519333782201,
        "pitch": -0.17874730169376818,
        "fov": 1.3504578530716602
      },
      "linkHotspots": [
        {
          "yaw": 0.2942519333782201,
          "pitch": -0.17874730169376818,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.24029493029921056,
          "pitch": 0.10961183173557032,
          "title": "You can go in from here",
          "text": "although Idk what is inside"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9687385976129684
      },
      "linkHotspots": [
        {
          "yaw": 0.18664605409890989,
          "pitch": -0.01290499664581013,
          "rotation": 3.141592653589793,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.248636202585109,
          "pitch": -0.18164532412335177,
          "title": "there seems to be a cafe",
          "text": "idk"
        },
        {
          "yaw": -0.5824262167745289,
          "pitch": 0.3065333009875495,
          "title": "people are studying",
          "text": "be quiet"
        }
      ]
    }
  ],
  "name": "faculty of engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
