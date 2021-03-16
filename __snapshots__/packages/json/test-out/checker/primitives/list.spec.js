exports['JSON list listOf(int) Check "5" 1'] = {
  "node": {
    "type": "json:number",
    "range": {
      "start": 0,
      "end": 1
    },
    "value": 5,
    "isInteger": true
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 0,
        "end": 1
      },
      "message": "Expected an array",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(int) Check "["foo", "bar"]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 14
    },
    "items": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ],
    "children": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 6
      },
      "message": "Expected an integer",
      "severity": 3
    },
    {
      "range": {
        "start": 8,
        "end": 13
      },
      "message": "Expected an integer",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(int) Check "[1, 4, 6]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 9
    },
    "items": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ],
    "children": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON list listOf(int) Check "[[4, 6]]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 8
    },
    "items": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ],
    "children": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 7
      },
      "message": "Expected an integer",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(int) Check "[]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 2
    },
    "items": [],
    "children": []
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON list listOf(listOf(int)) Check "5" 1'] = {
  "node": {
    "type": "json:number",
    "range": {
      "start": 0,
      "end": 1
    },
    "value": 5,
    "isInteger": true
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 0,
        "end": 1
      },
      "message": "Expected an array",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(listOf(int)) Check "["foo", "bar"]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 14
    },
    "items": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ],
    "children": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 6
      },
      "message": "Expected an array",
      "severity": 3
    },
    {
      "range": {
        "start": 8,
        "end": 13
      },
      "message": "Expected an array",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(listOf(int)) Check "[1, 4, 6]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 9
    },
    "items": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ],
    "children": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 2
      },
      "message": "Expected an array",
      "severity": 3
    },
    {
      "range": {
        "start": 4,
        "end": 5
      },
      "message": "Expected an array",
      "severity": 3
    },
    {
      "range": {
        "start": 7,
        "end": 8
      },
      "message": "Expected an array",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(listOf(int)) Check "[[4, 6]]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 8
    },
    "items": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ],
    "children": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON list listOf(listOf(int)) Check "[]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 2
    },
    "items": [],
    "children": []
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON list listOf(string) Check "5" 1'] = {
  "node": {
    "type": "json:number",
    "range": {
      "start": 0,
      "end": 1
    },
    "value": 5,
    "isInteger": true
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 0,
        "end": 1
      },
      "message": "Expected an array",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(string) Check "["foo", "bar"]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 14
    },
    "items": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ],
    "children": [
      {
        "type": "json:string",
        "range": {
          "start": 1,
          "end": 6
        },
        "value": "foo"
      },
      {
        "type": "json:string",
        "range": {
          "start": 8,
          "end": 13
        },
        "value": "bar"
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": []
}

exports['JSON list listOf(string) Check "[1, 4, 6]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 9
    },
    "items": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ],
    "children": [
      {
        "type": "json:number",
        "range": {
          "start": 1,
          "end": 2
        },
        "value": 1,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 4,
          "end": 5
        },
        "value": 4,
        "isInteger": true
      },
      {
        "type": "json:number",
        "range": {
          "start": 7,
          "end": 8
        },
        "value": 6,
        "isInteger": true
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 2
      },
      "message": "Expected a string",
      "severity": 3
    },
    {
      "range": {
        "start": 4,
        "end": 5
      },
      "message": "Expected a string",
      "severity": 3
    },
    {
      "range": {
        "start": 7,
        "end": 8
      },
      "message": "Expected a string",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(string) Check "[[4, 6]]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 8
    },
    "items": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ],
    "children": [
      {
        "type": "json:array",
        "range": {
          "start": 1,
          "end": 7
        },
        "items": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ],
        "children": [
          {
            "type": "json:number",
            "range": {
              "start": 2,
              "end": 3
            },
            "value": 4,
            "isInteger": true
          },
          {
            "type": "json:number",
            "range": {
              "start": 5,
              "end": 6
            },
            "value": 6,
            "isInteger": true
          }
        ]
      }
    ]
  },
  "parserErrors": [],
  "checkerErrors": [
    {
      "range": {
        "start": 1,
        "end": 7
      },
      "message": "Expected a string",
      "severity": 3
    }
  ]
}

exports['JSON list listOf(string) Check "[]" 1'] = {
  "node": {
    "type": "json:array",
    "range": {
      "start": 0,
      "end": 2
    },
    "items": [],
    "children": []
  },
  "parserErrors": [],
  "checkerErrors": []
}