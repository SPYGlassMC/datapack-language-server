exports['mcfunction argument minecraft:loot_modifier Parse "[{function:"furnace_smelt"}]" 1'] = {
  "node": {
    "type": "nbt:list",
    "range": {
      "start": 0,
      "end": 28
    },
    "children": [
      {
        "type": "item",
        "range": {
          "start": 1,
          "end": 27
        },
        "children": [
          {
            "type": "nbt:compound",
            "range": {
              "start": 1,
              "end": 27
            },
            "children": [
              {
                "type": "pair",
                "range": {
                  "start": 2,
                  "end": 26
                },
                "children": [
                  {
                    "type": "string",
                    "range": {
                      "start": 2,
                      "end": 10
                    },
                    "value": "function",
                    "valueMap": [
                      {
                        "inner": {
                          "start": 0,
                          "end": 0
                        },
                        "outer": {
                          "start": 2,
                          "end": 2
                        }
                      }
                    ]
                  },
                  {
                    "type": "string",
                    "range": {
                      "start": 11,
                      "end": 26
                    },
                    "value": "furnace_smelt",
                    "valueMap": [
                      {
                        "inner": {
                          "start": 0,
                          "end": 0
                        },
                        "outer": {
                          "start": 12,
                          "end": 12
                        }
                      }
                    ]
                  }
                ],
                "key": {
                  "type": "string",
                  "range": {
                    "start": 2,
                    "end": 10
                  },
                  "value": "function",
                  "valueMap": [
                    {
                      "inner": {
                        "start": 0,
                        "end": 0
                      },
                      "outer": {
                        "start": 2,
                        "end": 2
                      }
                    }
                  ]
                },
                "sep": {
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "string",
                  "range": {
                    "start": 11,
                    "end": 26
                  },
                  "value": "furnace_smelt",
                  "valueMap": [
                    {
                      "inner": {
                        "start": 0,
                        "end": 0
                      },
                      "outer": {
                        "start": 12,
                        "end": 12
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "value": {
          "type": "nbt:compound",
          "range": {
            "start": 1,
            "end": 27
          },
          "children": [
            {
              "type": "pair",
              "range": {
                "start": 2,
                "end": 26
              },
              "children": [
                {
                  "type": "string",
                  "range": {
                    "start": 2,
                    "end": 10
                  },
                  "value": "function",
                  "valueMap": [
                    {
                      "inner": {
                        "start": 0,
                        "end": 0
                      },
                      "outer": {
                        "start": 2,
                        "end": 2
                      }
                    }
                  ]
                },
                {
                  "type": "string",
                  "range": {
                    "start": 11,
                    "end": 26
                  },
                  "value": "furnace_smelt",
                  "valueMap": [
                    {
                      "inner": {
                        "start": 0,
                        "end": 0
                      },
                      "outer": {
                        "start": 12,
                        "end": 12
                      }
                    }
                  ]
                }
              ],
              "key": {
                "type": "string",
                "range": {
                  "start": 2,
                  "end": 10
                },
                "value": "function",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 2,
                      "end": 2
                    }
                  }
                ]
              },
              "sep": {
                "start": 10,
                "end": 11
              },
              "value": {
                "type": "string",
                "range": {
                  "start": 11,
                  "end": 26
                },
                "value": "furnace_smelt",
                "valueMap": [
                  {
                    "inner": {
                      "start": 0,
                      "end": 0
                    },
                    "outer": {
                      "start": 12,
                      "end": 12
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "valueType": "nbt:compound"
  },
  "errors": []
}

exports['mcfunction argument minecraft:loot_modifier Parse "foo:bar" 1'] = {
  "node": {
    "type": "resource_location",
    "range": {
      "start": 0,
      "end": 7
    },
    "namespace": "foo",
    "path": [
      "bar"
    ]
  },
  "errors": []
}
