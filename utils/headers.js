module.exports = (id) => ({
    "headers": {
    "accept": "*/*",
    "accept-language": "en-EN",
    "content-type": "application/json",
    "schoolid": "46e7d965-21e9-4936-bea9-f5ea0d1fddf2",
    "sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "68f57c48c2e0486e9e1f6b0294071fb9-b961047858cdd546-1",
    "userrole": "STUDENT"
  },  
    "referrer": "https://edu.21-school.ru/campus",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"operationName\":\"getCampusPlanOccupied\",\"variables\":{\"clusterId\":${id}},\"query\":\"query getCampusPlanOccupied($clusterId: ID!) {\\n  student {\\n    getClusterPlanStudentsByClusterId(clusterId: $clusterId) {\\n      occupiedPlaces {\\n        row\\n        number\\n        stageGroupName\\n        stageName\\n        user {\\n          id\\n          login\\n          avatarUrl\\n          __typename\\n        }\\n        experience {\\n          id\\n          value\\n          level {\\n            id\\n            range {\\n              id\\n              levelCode\\n              leftBorder\\n              rightBorder\\n              __typename\\n            }\\n            __typename\\n          }\\n          __typename\\n        }\\n        studentType\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include" 
  });